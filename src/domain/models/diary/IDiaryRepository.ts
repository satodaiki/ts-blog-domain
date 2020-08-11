import Diary from '@/domain/models/diary/Diary';

interface IDiaryRepository {
    save(diary: Diary): void;
}

export default IDiaryRepository;