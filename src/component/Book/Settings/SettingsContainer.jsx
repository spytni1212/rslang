import React from 'react' 
import { connect } from 'react-redux';
import Switch from '@material-ui/core/Switch';
import { setIsShowTranslate, setIsShowButtons } from '../../../redux/settings-reducer'
import s from './Settings.module.css'

const SettingsContainer = (props) => {

    const handleChangeSettings = (event) => {
        if (event.target.name === 'isShowTranslation') {
            props.setIsShowTranslate(event.target.checked)
        } else {
            props.setIsShowButtons(event.target.checked)
        }
    }

    return (
        <div className={s.settingsContainer}>
            <div className={s.settingContainer}>
                <div>
                    отображать в карточке перевод изучаемого слова и перевод предложений с ним
                </div>
                <div>
                    <Switch
                        checked={props.isShowTranslate}
                        onChange={handleChangeSettings}
                        color="primary"
                        name="isShowTranslation"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </div>
            </div>
            <div className={s.settingContainer}>
                <div>
                    отображать кнопки "сложное слово" и "удалить слово"
                </div>
                <div>
                    <Switch
                        checked={props.isShowButtons}
                        onChange={handleChangeSettings}
                        color="primary"
                        name="isShowButtons"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isShowTranslate: state.settings.isShowTranslate,
        isShowButtons: state.settings.isShowButtons
    }
}

export default connect(mapStateToProps, {setIsShowTranslate, setIsShowButtons})(SettingsContainer)