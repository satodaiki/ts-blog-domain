import DiaryId from '@/domain/models/diary/DiaryId';
import DiaryText from '@/domain/models/diary/DiaryText';
import DiaryCreateDate from '@/domain/models/diary/DiaryCreateDate';
import DiaryUpdateDate from '@/domain/models/diary//DiaryUpdateDate';
import UserId from '@/domain/models/user/UserId';

class Diary {
    private _id: DiaryId;
    private _text?: DiaryText;
    private _createUserId?: UserId;
    private _createDate?: DiaryCreateDate;
    private _updateUserId?: UserId;
    private _updateDate?: DiaryUpdateDate;

    public constructor(id: DiaryId, text?: DiaryText, createUserId?: UserId, createDate?: DiaryCreateDate, updateUserId?: UserId, updateDate?: DiaryUpdateDate) {
        this._id = id;
        this._text = text;
        this._createUserId = createUserId;
        this._createDate = createDate;
        this._updateUserId = updateUserId;
        this._updateDate = updateDate;
    }

    get id(): DiaryId {
        return this._id;
    }
}

export default Diary;