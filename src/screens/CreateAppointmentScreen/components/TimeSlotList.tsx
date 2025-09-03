import React from 'react';
import styled from 'styled-components/native';
import { ViewStyle, TouchableOpacity } from 'react-native';
import { ContainerTimeSlotList, TimeCard, TimeGrid, TimeText } from '../styles';

interface TimeSlotListProps {
  onSelectTime: (time: string) => void;
  selectedTime?: string;
  style?: ViewStyle;
}

interface StyledProps {
  isSelected: boolean;
}

const TimeSlotList: React.FC<TimeSlotListProps> = ({
  onSelectTime,
  selectedTime,
  style,
}) => {
  // Gera horários de 30 em 30 minutos das 9h às 18h
  const generateTimeSlots = () => {
    const slots: string[] = [];
    for (let hour = 9; hour < 18; hour++) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`);
      slots.push(`${hour.toString().padStart(2, '0')}:30`);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <ContainerTimeSlotList style={style}>
      <TimeGrid>
        {timeSlots.map((time) => (
          <TimeCard
            key={time}
            onPress={() => onSelectTime(time)}
            isSelected={selectedTime === time}
          >
            <TimeText isSelected={selectedTime === time}>{time}</TimeText>
          </TimeCard>
        ))}
      </TimeGrid>
    </ContainerTimeSlotList>
  );
};

export default TimeSlotList;