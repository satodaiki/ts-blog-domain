import * as uuid from "uuid";
import DiaryId from '@/domain/models/diary/DiaryId';
import DiaryText from '@/domain/models/diary/DiaryText';
import DiaryCreateDate from '@/domain/models/diary/DiaryCreateDate';
import DiaryUpdateDate from '@/domain/models/diary//DiaryUpdateDate';
import UserId from '@/domain/models/user/UserId';

class Diary {
    public readonly id: DiaryId;
    private _text?: DiaryText;
    private _createUserId?: UserId;
    private _createDate?: DiaryCreateDate;
    private _updateUserId?: UserId;
    private _updateDate?: DiaryUpdateDate;

    public constructor(text?: DiaryText, createUserId?: UserId, createDate?: DiaryCreateDate, updateUserId?: UserId, updateDate?: DiaryUpdateDate) {
        this.id = new DiaryId(uuid.v4());
        this._text = text;
        this._createUserId = createUserId;
        this._createDate = createDate;
        this._updateUserId = updateUserId;
        this._updateDate = updateDate;
    }
}

export default Diary;