import React from 'react';
import { addMessageActionCreater, updateNewMessageCreater } from '../../redux/dialogReducer'
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';



const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {
            (store) => {

                let state = store.getState().dialogsPage;

                let onSendMessage = () => {
                    store.dispatch(addMessageActionCreater());
                }

                let onUpdateChangeMessage = (text) => {
                    store.dispatch(updateNewMessageCreater(text));
                }

                return (
                    <div>
                        <Dialogs onSendMessage={onSendMessage} onUpdateChangeMessage={onUpdateChangeMessage} dialogsPage={state} />
                    </div>
                )
            }
        }
    </StoreContext.Consumer>
}
export default DialogsContainer;