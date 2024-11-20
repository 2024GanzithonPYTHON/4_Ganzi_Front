import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  FormListContainer,
  ListDescriptionContainer,
  ListTextContainer,
  ListTitle,
  RequiredMarker,
  ListDescription,
  InputContainer,
  InputContentContainer,
} from "../ClubRegisterPage.styled";

const FieldBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const InputField = styled.input`
  width: 285px;
  height: 47px;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #757575;
  outline: none;
`;

const MemberLimit = styled.p`
  margin-top: 10px;
  font-size: 12px;
  color: #757575;
`;

const AlertMessage = styled.p`
  margin-top: 10px;
  font-size: 12px;
  color: red;
`;

const ClubCount = ({ onChange, initialMemberCount }) => {
  const [memberCount, setMemberCount] = useState(initialMemberCount || "");
  const [isValid, setIsValid] = useState("");

  useEffect(() => {
    setMemberCount(memberCount || "");
  }, [initialMemberCount]);

  const handleMemberCountChange = (e) => {
    const inputNumber = e.target.value;

    if (/^[2-8]$/.test(inputNumber)) {
      setMemberCount(Number(inputNumber));
      setIsValid("");
      onChange(inputNumber);
    } else if (inputNumber === "") {
      setMemberCount("");
      setIsValid("");
    } else {
      setMemberCount("");
      setIsValid("2명에서 8명 사이의 숫자를 입력해주세요.");
    }
  };

  return (
    <FormListContainer>
      <ListDescriptionContainer>
        <ListTextContainer>
          <ListTitle>
            모집 인원<RequiredMarker> ⁎</RequiredMarker>
          </ListTitle>
          <ListDescription>
            함께 프로젝트를 진행하고 싶은 모집 인원을 작성해주세요.
          </ListDescription>
        </ListTextContainer>
      </ListDescriptionContainer>
      <InputContainer>
        <InputContentContainer>
          <FieldBox>
            <InputField
              type="text"
              placeholder="모집 인원을 입력해주세요 (숫자만 입력)"
              onChange={handleMemberCountChange}
              value={memberCount}
            />
            {isValid && <AlertMessage>{isValid}</AlertMessage>}
            <MemberLimit>최대 8명</MemberLimit>
          </FieldBox>
        </InputContentContainer>
      </InputContainer>
    </FormListContainer>
  );
};

export default ClubCount;
