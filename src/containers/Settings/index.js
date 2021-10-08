import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/routers';
import { BaseView, ColorText, ColorView } from '../../common/Stylesheet';
import { themeActions } from '../../redux/theme/actions';
import { themeOptions } from '../../redux/theme/options';
import { userActions } from '../../redux/user/actions'
import { DetailsTopicView, DetailsTopicText } from '../../common/Stylesheet'
import { cFL } from '../common/functions'

import Welcome from '../common/Welcome'

const Settings = props => {
    const themes = Object.keys(themeOptions)
    const currentTheme = useSelector(state => state.theme.name)
    const dispatch = useDispatch()
    const selectTheme = theme => dispatch(themeActions.change_theme(theme))

    const logout = () => {
        dispatch(userActions.logout())
        props.navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [
                { name: 'Login' }
            ],
        }))
    }

    
    return (
        <BaseView barHeight={StatusBar.currentHeight}>
            <Welcome title="Settings" settings {...props} />
            <DetailsTopicView>
                <DetailsTopicText>
                    Select theme
                </DetailsTopicText>
            </DetailsTopicView>
            {themes.map((them, i) => <TouchableOpacity key={i} onPress={() => selectTheme(them)}>
                <ColorView them={themeOptions[them]}>
                    <ColorText them={themeOptions[them]}>{cFL(them)}{currentTheme === them ? " - Current": ""}</ColorText>
                </ColorView>
            </TouchableOpacity>)}

            <DetailsTopicView>
                <DetailsTopicText>
                    Actions
                </DetailsTopicText>
            </DetailsTopicView>
            <TouchableOpacity onPress={() => logout()}>
                <ColorView>
                    <ColorText>Log out</ColorText>
                </ColorView>
            </TouchableOpacity>
            
        </BaseView>
    );
}

export default Settings;
