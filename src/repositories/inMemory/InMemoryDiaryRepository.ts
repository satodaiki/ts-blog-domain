import IDiaryRepository from '@/domain/models/diary/IDiaryRepository';
import Diary from '@/domain/models/diary/Diary';
import DiaryId from '@/domain/models/diary/DiaryId';

class InMemoryDiaryRepository implements IDiaryRepository {
    
    private data: Map<DiaryId, Diary> = new Map();

    public find(diaryId: DiaryId): Diary | undefined {
        return this.data.get(diaryId);
    }

    public findAll(): Array<Diary> | undefined {
        let allList = Array<Diary>();
        this.data.forEach(v => allList.push(v));
        return allList;
    }

    public save(diary: Diary): void {
        this.data.set(diary.id, diary);
    }
}

export default InMemoryDiaryRepository;