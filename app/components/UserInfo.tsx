import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';

import { User as Props } from '../screens/Home';

const UserInfoContainer = styled(View)`
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled(Image)`
  width: 150px;
  height: 150px;
  margin-bottom: 25px;
`;

const UserInfoGroup = styled(View)`
  flex-direction: row;
  margin-bottom: 15px;
`;

const Label = styled(Text)`
  flex: 1;
  text-align: right;
  color: #888;
  margin-right: 10px;
`;

const UserInfoText = styled(Text)`
  flex: 2;
  color: white;
`;

function UserInfo({
  email,
  emailVerified,
  familyName,
  givenName,
  name,
  nickname,
  picture,
  updatedAt,
}: Props) {
  return (
    <UserInfoContainer>
      <Avatar source={{ uri: picture }} />
      <UserInfoGroup>
        <Label>Name:</Label>
        <UserInfoText>{name}</UserInfoText>
      </UserInfoGroup>
      <UserInfoGroup>
        <Label>E-mail address:</Label>
        <UserInfoText>{email}</UserInfoText>
      </UserInfoGroup>
      <UserInfoGroup>
        <Label>Given name:</Label>
        <UserInfoText>{givenName}</UserInfoText>
      </UserInfoGroup>
      <UserInfoGroup>
        <Label>Family name:</Label>
        <UserInfoText>{familyName}</UserInfoText>
      </UserInfoGroup>
      <UserInfoGroup>
        <Label>Nickname:</Label>
        <UserInfoText>{nickname}</UserInfoText>
      </UserInfoGroup>
      <UserInfoGroup>
        <Label>Is e-mail verified:</Label>
        <UserInfoText>{emailVerified ? 'Yes' : 'No'}</UserInfoText>
      </UserInfoGroup>
      <UserInfoGroup>
        <Label>Updated at:</Label>
        <UserInfoText>{updatedAt}</UserInfoText>
      </UserInfoGroup>
    </UserInfoContainer>
  );
}

export default UserInfo;
