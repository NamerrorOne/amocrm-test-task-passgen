# amoCRM Password Generator - Frontend

## Описание

Этот проект был создан для выполнения тестового задания от amoCRM и представляет собой небольшой генератор паролей. В качестве фронтенда использованы Vite и React. Форма обрабатывается с помощью React Hook Form. Проект структурирован по методологии Featured-Sliced Design.

## Функционал

- **Генерация пароля**: автоматическое создание надежных и случайных паролей с учетом выбранных параметров.
- **Возможность настройки параметров пароля**: пользователь может выбирать длину пароля, а также включать или исключать цифры, заглавные и строчные буквы, специальные символы.
- **Копирование в буфер обмена**: удобное однонажатие для быстрого копирования сгенерированного пароля для последующего использования.

## Техническая спецификация

- **UI Library**: отсутствует.
- **State Management**: отсутствует.
- **Routing**: отсутствует.
- **HTTP Client**: отсутствует.
- **Form Handling**: react-hook-form.
- **Build Tool**: Vite с поддержкой TypeScript.
- **Architectural methodology**: Feature-Sliced Design.
- **Type Safety**: TypeScript.
- **Code Quality**: ESLint c airbnb-extended конфигом, stylelint с когфигом clean-imports-order для проверки стилей и steiger для проверки архитектурного соответствия (fsd).

## Страницы и маршруты

- **/**: Главная страница с функционалом генерации паролей.

## Установка

1. Склонируйте репозиторий: `git clone https://github.com/NamerrorOne/amocrm-test-task-passgen.git`
2. Перейдите в папку с проектом: `cd amocrm-test-task-passgen`
3. Установите зависимости: `npm ci`

## Использование

- **Development mode**: `npm run dev`
- **Production build**: `npm run build`
- **Preview mode**: `npm run preview`

- **ESLint checking**: `npm run lint`
- **Styles checking**: `npm run stylelint`
- **Architectural checking**: `npm run steiger`

## Метрики Lighthouse

Засчет грамотного подхода к разработке, добавления meta description, meta keywords, robots.txt, использования семантических тегов, а так же добавления лейблов и контролю контраста цветов были достигнуты следующие метрики:

- **Performance**: 100%
- **Accessibility**: 100%
- **Best practices**: 100%
- **SEO**: 100%

![telegram-cloud-photo-size-2-5228809288162605179-y](https://github.com/user-attachments/assets/411be234-390b-461c-8f71-7cc2d188073e)

