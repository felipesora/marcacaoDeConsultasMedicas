import styled from 'styled-components/native';
import theme from "../../styles/theme";
import { TouchableOpacity } from 'react-native';
import { StyledProps } from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 20px;
  text-align: center;
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const ErrorText = styled.Text`
  color: ${theme.colors.error};
  text-align: center;
  margin-bottom: 10px;
`;

export const ContainerTimeSlotList = styled.View`
  margin-bottom: 15px;
`;

export const TimeGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 6px;
`;

export const TimeCard = styled(TouchableOpacity)<StyledProps>`
  width: 23%;
  padding: 8px;
  border-radius: 6px;
  background-color: ${(props: StyledProps) => props.isSelected ? theme.colors.primary + '20' : theme.colors.background};
  border-width: 1px;
  border-color: ${(props: StyledProps) => props.isSelected ? theme.colors.primary : theme.colors.border};
  align-items: center;
  justify-content: center;
`;

export const TimeText = styled.Text<StyledProps>`
  font-size: 12px;
  font-weight: 500;
  color: ${(props: StyledProps) => props.isSelected ? theme.colors.primary : theme.colors.text};
`;

export const ContainerDoctorList = styled.View`
  margin-bottom: 15px;
`;

export const styles = {
  scrollContent: {
    padding: 20,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
    width: '100%',
  },
  buttonStyle: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
  },
  cancelButton: {
    backgroundColor: theme.colors.secondary,
    paddingVertical: 12,
  },
  listItem: {
    borderRadius: 8,
    marginVertical: 4,
    backgroundColor: theme.colors.background,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  selectedItem: {
    backgroundColor: theme.colors.primary + '20',
    borderColor: theme.colors.primary,
  },
  avatar: {
    backgroundColor: theme.colors.primary,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  specialty: {
    fontSize: 14,
    color: theme.colors.text,
    opacity: 0.7,
  },
};