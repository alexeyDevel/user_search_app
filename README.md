<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Инструкции по запуску сервисов</title>
</head>
<body>
    <h1>Инструкции по запуску сервисов</h1>

    <h2>client_app</h2>
    <ol>
        <li>Установите Node.js, если он не установлен.</li>
        <li>Откройте терминал и перейдите в папку, где находится <code>client_app</code>.</li>
        <li>Выполните следующие команды для установки зависимостей:</li>
    </ol>
    <pre>
        <code>
            npm install
        </code>
    </pre>
    <ol start="4">
        <li>Для запуска локального сервера разработки выполните команду:</li>
    </ol>
    <pre>
        <code>
            npm run dev
        </code>
    </pre>
    <ol start="5">
        <li>Для сборки проекта выполните команду:</li>
    </ol>
    <pre>
        <code>
            npm run build
        </code>
    </pre>
    <ol start="6">
        <li>Для линтинга кода выполните команду:</li>
    </ol>
    <pre>
        <code>
            npm run lint
        </code>
    </pre>
    <ol start="7">
        <li>Для предпросмотра собранного приложения выполните команду:</li>
    </ol>
    <pre>
        <code>
            npm run preview
        </code>
    </pre>

    <h2>server_app</h2>
    <ol>
        <li>Установите Node.js, если он не установлен.</li>
        <li>Откройте терминал и перейдите в папку, где находится <code>server_app</code>.</li>
        <li>Выполните следующие команды для установки зависимостей:</li>
    </ol>
    <pre>
        <code>
            npm install
        </code>
    </pre>
    <ol start="4">
        <li>Для запуска сервера в режиме разработки выполните команду:</li>
    </ol>
    <pre>
        <code>
            npm run dev
        </code>
    </pre>
    <ol start="5">
        <li>Для сборки сервера выполните команду:</li>
    </ol>
    <pre>
        <code>
            npm run build
        </code>
    </pre>
    <ol start="6">
        <li>Для запуска сервера выполните команду:</li>
    </ol>
    <pre>
        <code>
            npm start
        </code>
    </pre>
</body>
</html>
