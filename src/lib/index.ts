export function formatEmail(email: string) {
  const splitEmail = email.split("@");
  const midCut = splitEmail[0];

  if (midCut.length > 12) {
    return midCut.substring(0, 10).concat("...") + "@" + splitEmail[1];
  }

  return email;
}

export function resolveProgressWidth(amount: number) {
  let targetAmount = 50000;

  const width = (amount / targetAmount) * 100;

  return `${width}%`;
}
