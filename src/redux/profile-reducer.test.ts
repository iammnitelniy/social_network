import profileReducer, {
    addPostActionCreator,
    ProfilePageStateTypeRedux,
    SetProfileStatusAC,
    updateProfileStatusTC
} from "./profileReducer";
import {profileAPI} from "../api/ProfileAPI";

let startState: ProfilePageStateTypeRedux

beforeEach(() => {
    startState = {
        postData: [
            {
                id: 1,
                content: "bow",
                countLikes: 12,
                countDislikes: 9
            },
            {
                id: 2,
                content: "wow",
                countLikes: 5,
                countDislikes: 1
            },
            {
                id: 3,
                content: "get",
                countLikes: 7,
                countDislikes: 3
            },
            {
                id: 4,
                content: "down",
                countLikes: 9,
                countDislikes: 0
            }


        ],
        profile: null,
        status: ""

    }
})

test("correct status should be updated", () => {
    const status = 'good morning';
    const action = SetProfileStatusAC(status);

    const endState = profileReducer(startState, action);

    expect(endState.status).toBe(status)
});


jest.mock("../api/ProfileAPI", () => ({
    profileAPI: {
        updateStatus: jest.fn(),
    },
}));

describe('updateProfileStatusTC', () => {
    it('should dispatch SetProfileStatusAC with status on successful update', async () => {
        const status = 'good morning';
        const dispatch = jest.fn();

        // Мокируем успешный ответ от API
        (profileAPI.updateStatus as jest.Mock).mockResolvedValue({
            data: {
                resultCode: 0,
            },
        });

        // Вызываем санку
        await updateProfileStatusTC(status)(dispatch);

        // Проверяем, что dispatch вызывается с правильными параметрами
        expect(dispatch).toHaveBeenCalledWith(SetProfileStatusAC(status));
    });
});