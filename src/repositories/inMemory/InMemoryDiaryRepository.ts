import IDiaryRepository from '@/domain/models/diary/IDiaryRepository';
import Diary from '@/domain/models/diary/Diary';
import DiaryId from '@/domain/models/diary/DiaryId';

class InMemoryDiaryRepository implements IDiaryRepository {
    
    private datas: Map<DiaryId, Diary> = new Map();

    public find(diaryId: DiaryId): Diary | undefined {
        let dataItr = this.datas.entries();
        let target: Diary | undefined;
        while (true) {
            let data = dataItr.next();
            if (data.done === true) break;
            if (data.value[0].value === diaryId.value) {
                target = data.value[1];
            }
        }
        return target;
    }

    public findAll(): Array<Diary> | undefined {
        let allList = Array<Diary>();
        this.datas.forEach(v => allList.push(v));
        return allList;
    }

    public save(diary: Diary): void {
        this.datas.set(diary.id, diary);
    }

    public delete(diaryId: DiaryId): void {
        const diary = this.find(diaryId);
        if (!diary) return;
        this.datas.delete(diary.id);
    }
}

export default InMemoryDiaryRepository;