// Calculate age from birth date
export const calculateAge = (birthDate: Date): string => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age -= 1;
  }

  return age.toString();
};

// Calculate years of experience from start year
export const calculateYearsOfExperience = (startYear: number): string => {
  const currentYear = new Date().getFullYear();
  const years = currentYear - startYear;
  return `${years}+ years`;
};
