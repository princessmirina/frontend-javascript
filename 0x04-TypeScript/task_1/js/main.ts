type Teacher = {
  readonly firstName: string; // only modifiable on initialization
  readonly lastName: string; // only modifiable on initialization
  fullTimeEmployee: boolean; // always defined
  yearsOfExperience?: number; // optional
  location: string; // always defined
  [key: string]: any; // allow any extra attribute
};

// Example usage:
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

console.log(teacher3);
