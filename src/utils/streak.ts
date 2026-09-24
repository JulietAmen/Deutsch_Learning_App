import { StreakData } from '../types';

const STORAGE_KEY = 'deutsch_app_streak_v1';

export function getTodayDateString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getYesterdayDateString(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getDefaultStreakData(): StreakData {
  return {
    currentStreak: 1,
    maxStreak: 1,
    lastActiveDate: getTodayDateString(),
    activeDaysHistory: [getTodayDateString()],
    todayCount: 0,
    dailyGoalTarget: 5,
    totalXp: 50,
    completedActivities: {
      vocabCount: 0,
      quizzesCount: 0,
      sentencesCount: 0,
      interviewCount: 0,
    },
    learnedVocabIds: [],
  };
}

export function loadStreakData(): StreakData {
  if (typeof window === 'undefined') return getDefaultStreakData();

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const initial = getDefaultStreakData();
      saveStreakData(initial);
      return initial;
    }
    const parsed: StreakData = JSON.parse(raw);
    const today = getTodayDateString();
    const yesterday = getYesterdayDateString();

    // Check if streak is still alive
    if (parsed.lastActiveDate === today) {
      // Same day, streak intact
      return parsed;
    } else if (parsed.lastActiveDate === yesterday) {
      // Yesterday was active, ready for today!
      // Reset today count for the new day
      const updated: StreakData = {
        ...parsed,
        todayCount: 0,
      };
      saveStreakData(updated);
      return updated;
    } else {
      // Streak broken (more than 1 day missed)
      const reset: StreakData = {
        ...parsed,
        currentStreak: 0,
        todayCount: 0,
      };
      saveStreakData(reset);
      return reset;
    }
  } catch (e) {
    console.error('Failed to parse streak data:', e);
    return getDefaultStreakData();
  }
}

export function saveStreakData(data: StreakData): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save streak data:', e);
  }
}

export function registerActivity(
  activityType: 'vocab' | 'quiz' | 'sentence' | 'interview',
  xpEarned: number = 10
): StreakData {
  const current = loadStreakData();
  const today = getTodayDateString();
  const yesterday = getYesterdayDateString();

  let newStreak = current.currentStreak;
  let newMaxStreak = current.maxStreak;
  const history = [...current.activeDaysHistory];

  if (!history.includes(today)) {
    history.push(today);
  }

  // If first action of the day:
  if (current.lastActiveDate !== today) {
    if (current.lastActiveDate === yesterday || current.currentStreak === 0) {
      newStreak = current.currentStreak + 1;
    } else {
      newStreak = 1;
    }
    if (newStreak > newMaxStreak) {
      newMaxStreak = newStreak;
    }
  }

  const updated: StreakData = {
    ...current,
    currentStreak: newStreak,
    maxStreak: newMaxStreak,
    lastActiveDate: today,
    activeDaysHistory: history,
    todayCount: current.todayCount + 1,
    totalXp: current.totalXp + xpEarned,
    completedActivities: {
      ...current.completedActivities,
      vocabCount: current.completedActivities.vocabCount + (activityType === 'vocab' ? 1 : 0),
      quizzesCount: current.completedActivities.quizzesCount + (activityType === 'quiz' ? 1 : 0),
      sentencesCount: current.completedActivities.sentencesCount + (activityType === 'sentence' ? 1 : 0),
      interviewCount: current.completedActivities.interviewCount + (activityType === 'interview' ? 1 : 0),
    },
  };

  saveStreakData(updated);
  return updated;
}

export function toggleLearnedVocab(vocabId: string): StreakData {
  const current = loadStreakData();
  const ids = [...current.learnedVocabIds];
  const idx = ids.indexOf(vocabId);
  if (idx >= 0) {
    ids.splice(idx, 1);
  } else {
    ids.push(vocabId);
  }
  const updated: StreakData = {
    ...current,
    learnedVocabIds: ids,
  };
  saveStreakData(updated);
  return updated;
}
