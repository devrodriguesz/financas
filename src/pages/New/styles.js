import styled from 'styled-components';

export const Background = styled.View`
background-color: #131313;
flex:1
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#222'
})`
height: 50px;
width: 90%;
background-color: rgba(255,255,255, 0.9);
margin-top: 30px;
font-size: 16px;
`;

export const SubmitButton = styled.TouchableOpacity`
height: 50px;
width: 90%;
margin-top: 20px;
align-items: center;
justify-content: center;
background-color: #00b94a;
`;


export const SubimitText = styled.Text`
font-size: 21px;
color: #FFF;
font-weight: bold;
`;


