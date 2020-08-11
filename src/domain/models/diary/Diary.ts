import DiaryId from '@/domain/models/diary/DiaryId';
import DiaryText from '@/domain/models/diary/DiaryText';
import DiaryRegisteredDate from '@/domain/models/diary/DiaryRegisteredDate';

class Diary {
    private id: DiaryId;
    private text?: DiaryText;
    private registeredDate?: DiaryRegisteredDate;

    public constructor(id: DiaryId) {
        this.id = id;
    }

    public regist(text: DiaryText, registeredDate: DiaryRegisteredDate) {
        this.text = text;
        this.registeredDate = registeredDate;
    }
}

export default Diary;