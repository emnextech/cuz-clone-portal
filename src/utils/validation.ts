import { VALIDATION } from './constants';

export const validateStudentId = (studentId: string): string | null => {
  if (!studentId) {
    return 'Student ID is required';
  }
  if (!/^\d+$/.test(studentId)) {
    return 'Student ID must contain only numbers';
  }
  if (studentId.length !== VALIDATION.STUDENT_ID_LENGTH) {
    return `Student ID must be exactly ${VALIDATION.STUDENT_ID_LENGTH} digits`;
  }
  return null;
};

export const validatePassword = (password: string): string | null => {
  if (!password) {
    return 'Password is required';
  }
  if (password.length < VALIDATION.MIN_PASSWORD_LENGTH) {
    return `Password must be at least ${VALIDATION.MIN_PASSWORD_LENGTH} characters`;
  }
  return null;
};
