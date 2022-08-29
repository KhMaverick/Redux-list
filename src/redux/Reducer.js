const initialState = [
    // {
    //     item: action.payload,
    //     like: false,
    //     edit: false
    // }
]
const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            let tempData = [...state];
            tempData.push(
                {
                    item: action.payload,
                    like: false,
                    edit: false
                }
            );
            return tempData;

        case 'DEL':
            let tempData2 = [...state];
            tempData2.splice(action.payload, 1);
            return tempData2;

        case 'CLEAR':
            let tempData3 = action.payload;
            return tempData3;

        case 'EDIT':
            let edit_data = [...state]
            edit_data.splice(action.payload, 1, {
                item: action.payload,
                like: false,
                edit: true
            } )
            // edit_data[action.payload].edit = !edit_data[action.payload].edit;
            return edit_data;

        case 'SAVE':
            let save_data = [...state];

            save_data.splice(action.payload.index, 1, {
                item: action.payload.item,
                like: false,
                edit: false
            } )

            // save_data[action.payload.index].item = action.payload.item;
            // save_data[action.payload.index].edit = !save_data[action.payload.index].edit;

            return save_data;

        case 'LIKE':
            let like_data = [...state];

            like_data.splice(action.payload, 1, {
                item: like_data[action.payload].item,
                like: !like_data[action.payload].like,
                edit: false
            } )


            // like_data[action.payload].like = !like_data[action.payload].like;

            return like_data;

        default: return state
    }
}
export default Reducer