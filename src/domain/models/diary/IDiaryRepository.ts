import Diary from '@/domain/models/diary/Diary';
import DiaryId from '@/domain/models/diary/DiaryId';

interface IDiaryRepository {
    find(id: DiaryId): Diary;
    save(diary: Diary): void;
}

export default IDiaryRepository;