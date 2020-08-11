import IDiaryRepository from '@/domain/models/diary/IDiaryRepository';
import Diary from '@/domain/models/diary/Diary';
import DiaryId from '@/domain/models/diary/DiaryId';

class InMemoryDiaryRepository implements IDiaryRepository {
    
    private data: Map<DiaryId, Diary> = new Map();

    public find(diaryId: DiaryId): Diary {
        return new Diary(diaryId);
    }

    public save(diary: Diary): void {
        return;
    }
}