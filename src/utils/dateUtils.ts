export function isNight(): boolean {
  const now = new Date();
  const hour = now.getHours();
  return hour < 6 || hour >= 18;
}

export function getFormattedDate(): string {
  const now = new Date();

  const weekdays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ];
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  const weekday = weekdays[now.getDay()];
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  return `Hoje é ${weekday}, ${day} de ${month} de ${year}`;
}
