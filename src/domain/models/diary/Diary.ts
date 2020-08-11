import DiaryId from '@/domain/models/diary/DiaryId';
import DiaryText from '@/domain/models/diary/DiaryText';
import DiaryCreateDate from '@/domain/models/diary/DiaryCreateDate';
import DiaryUpdateDate from '@/domain/models/diary//DiaryUpdateDate';

class Diary {
    private id: DiaryId;
    private text?: DiaryText;
    private createDate?: DiaryCreateDate;
    private updateDate?: DiaryUpdateDate;

    public constructor(id: DiaryId, text?: DiaryText, createDate?: DiaryCreateDate, updateDate?: DiaryUpdateDate) {
        this.id = id;
        this.text = text;
        this.createDate = createDate;
        this.updateDate = updateDate;
    }
}

export default Diary;