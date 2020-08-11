import Diary from '@/domain/models/diary/Diary';
import IDiaryRepository from '@/domain/models/diary/IDiaryRepository';
import DiaryId from '@/domain/models/diary/DiaryId';

class InMemoryDiaryRepository implements IDiaryRepository {
    
    private data: Map<DiaryId, Diary> = new Map();

    public save(diary: Diary): void {
        return;
    }
}