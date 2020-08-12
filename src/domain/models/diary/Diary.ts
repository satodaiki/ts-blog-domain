import DiaryId from '@/domain/models/diary/DiaryId';
import DiaryText from '@/domain/models/diary/DiaryText';
import DiaryCreateDate from '@/domain/models/diary/DiaryCreateDate';
import DiaryUpdateDate from '@/domain/models/diary//DiaryUpdateDate';

class Diary {
    private _id: DiaryId;
    private _text?: DiaryText;
    private _createDate?: DiaryCreateDate;
    private _updateDate?: DiaryUpdateDate;

    public constructor(id: DiaryId, text?: DiaryText, createDate?: DiaryCreateDate, updateDate?: DiaryUpdateDate) {
        this._id = id;
        this._text = text;
        this._createDate = createDate;
        this._updateDate = updateDate;
    }

    get id(): DiaryId {
        return this._id;
    }
}

export default Diary;