import { v4 as uuidv4 } from 'uuid';
import IDiaryRepository from "@/domain/models/diary/IDiaryRepository";
import DiaryId from "@/domain/models/diary/DiaryId";
import DiaryText from "@/domain/models/diary/DiaryText";
import DiaryCreateDate from "@/domain/models/diary/DiaryCreateDate";
import Diary from '@/domain/models/diary/Diary';
import UserId from '@/domain/models/user/UserId';

class DiaryApplicationService {
    private diaryRepository: IDiaryRepository;

    constructor(diaryRepository: IDiaryRepository) {
        this.diaryRepository = diaryRepository;
    }

    public register(text: string, userId?: UserId): void {
        const diaryText: DiaryText = new DiaryText(text);
        const diaryCreateDate: DiaryCreateDate = new DiaryCreateDate(new Date());

        const diary = new Diary(diaryText, userId, diaryCreateDate);

        this.diaryRepository.save(diary);
    }

    public delete(id: string): void {
        const diaryId: DiaryId = new DiaryId(id);
        const user = this.diaryRepository.find(diaryId);

        if (user === undefined) return;

        this.diaryRepository.delete(user.id);
    }

    public getAll(): Array<Diary> | undefined {
        return this.diaryRepository.findAll();
    }
}

export default DiaryApplicationService;