import Diary from '@/domain/models/diary/Diary';
import DiaryId from '@/domain/models/diary/DiaryId';

interface IDiaryRepository {
    find(id: DiaryId): Diary | undefined;
    findAll(): Array<Diary> | undefined;
    save(diary: Diary): void;
    delete(id: DiaryId): void;
}

export default IDiaryRepository;