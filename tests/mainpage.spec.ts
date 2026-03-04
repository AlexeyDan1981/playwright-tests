import { test, expect } from '@playwright/test';
//import { link } from 'node:fs';
//import { exit } from 'node:process';

//const elements = [];

test.describe('Тесты сайта gunnerxxx', () => {
  //группировка тестов
  test.beforeEach(async ({ page }) => {
    //Это hook который выполнится перед каждым тестом чтобы не повторять его
    await page.goto('http://gunnerxxx.ru/');
  });
  test('Проверка элементов на главной странице gunnerxxx', async ({ page }) => {
    test.step('Проверка отображения кнопок слева в списке', async () => {
      await expect(page.getByRole('list')).toContainText('Главная страница');
      await expect(page.getByRole('list')).toContainText('Исторические справки');
      await expect(page.getByRole('list')).toContainText('Услуги');
      await expect(page.getByRole('list')).toContainText('Контакты');
      await expect(page.getByRole('list')).toContainText('Форум');
      // await page.close();
    });
    test.step('Проверка отображения шапки и ссылок на страницы в кнопках', async () => {
      await expect(page.getByRole('img', { name: 'шапка моего сайта' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Главная страница' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Исторические справки' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Фотогалерея' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Услуги' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Контакты' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Форум' })).toBeVisible();
    });
  });

  test('Проверка ссылок на главной странице gunnerxxx', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Форум' })).toHaveAttribute('href', 'page5.html');
    await expect(page.getByRole('link', { name: 'Услуги' })).toHaveAttribute('href', 'page2.html');
    await expect(page.getByRole('link', { name: 'Контакты' })).toHaveAttribute(
      'href',
      'page3.html',
    );
    await expect(page.getByRole('link', { name: 'Фотогалерея' })).toHaveAttribute(
      'href',
      'page4.html',
    );
  });

  test('Проверка кликов по кнопкам', async ({ page }) => {
    await page.getByRole('link', { name: 'Главная страница' }).click();
    await expect(page.getByRole('img', { name: 'шапка моего сайта' })).toBeVisible();
    await page.getByRole('link', { name: 'Исторические справки' }).click();
    await page.getByRole('link', { name: 'Фотогалерея' }).click();
    await page.getByRole('link', { name: 'Услуги' }).click();
    await page.getByRole('link', { name: 'Контакты' }).click();
    await page.getByRole('link', { name: 'Форум' }).click();
    await page.close();
  });
});

// test.describe('Тесты сайта playwright', () => {
//   test.beforeEach(async ({ page }) => {
//     //Это hook который выполнится перед каждым тестом чтобы не повторять его
//     await page.goto('https://playwright.dev/');
//   });
//   test('Проверка переключения light-mode', async ({ page }) => {
//     await page.getByRole('button', { name: 'Switch between dark and light' }).dblclick();

//     await page.close();
//   });

//   test('Проверка кнопки Get Started ', async ({ page }) => {
//     await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
//     await expect(page.getByRole('link', { name: 'Get started' })).toContainText('Get started');
//     await expect(page.getByRole('link', { name: 'Get started' })).toHaveAttribute(
//       'href',
//       '/docs/intro',
//     );
//     await page.getByRole('link', { name: 'Get started' }).click();
//     await page.close();
//   });
// });

// test('Проверка элементов на главной странице gunnerxxx', async ({ page }) => {
//   await page.goto('http://gunnerxxx.ru/');
//   await expect(page.getByRole('list')).toContainText('Главная страница');
//   await expect(page.getByRole('list')).toContainText('Исторические справки');
//   await expect(page.getByRole('list')).toContainText('Услуги');
//   await expect(page.getByRole('list')).toContainText('Контакты');
//   await expect(page.getByRole('list')).toContainText('Форум');
//   await expect(page.getByRole('img', { name: 'шапка моего сайта' })).toBeVisible();
//   await expect(page.getByRole('link', { name: 'Главная страница' })).toBeVisible();
//   await expect(page.getByRole('link', { name: 'Исторические справки' })).toBeVisible();
//   await expect(page.getByRole('link', { name: 'Фотогалерея' })).toBeVisible();
//   await expect(page.getByRole('link', { name: 'Услуги' })).toBeVisible();
//   await expect(page.getByRole('link', { name: 'Контакты' })).toBeVisible();
//   await expect(page.getByRole('link', { name: 'Форум' })).toBeVisible();
// });

// test('Проверка ссылок на главной странице gunnerxxx', async ({ page }) => {
//   await page.goto('http://gunnerxxx.ru/');
//   await expect(page.getByRole('link', { name: 'Форум' })).toHaveAttribute('href', 'page5.html');
//   await expect(page.getByRole('link', { name: 'Услуги' })).toHaveAttribute('href', 'page2.html');
//   await expect(page.getByRole('link', { name: 'Контакты' })).toHaveAttribute('href', 'page3.html');
//   await expect(page.getByRole('link', { name: 'Фотогалерея' })).toHaveAttribute(
//     'href',
//     'page4.html',
//   );
// });

// test('Проверка кликов по кнопкам', async ({ page }) => {
//   await page.goto('http://gunnerxxx.ru/');
//   await page.getByRole('link', { name: 'Главная страница' }).click();
//   await expect(page.getByRole('img', { name: 'шапка моего сайта' })).toBeVisible();
//   await page.getByRole('link', { name: 'Исторические справки' }).click();
//   await page.getByRole('link', { name: 'Фотогалерея' }).click();
//   await page.getByRole('link', { name: 'Услуги' }).click();
//   await page.getByRole('link', { name: 'Контакты' }).click();
//   await page.getByRole('link', { name: 'Форум' }).click();
//   await page.close();
// });

// test('Проверка переключения light-mode', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await page.getByRole('button', { name: 'Switch between dark and light' }).dblclick();

//   //await page.close();
// });

// test('Проверка кнопки Get Started ', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
//   await expect(page.getByRole('link', { name: 'Get started' })).toContainText('Get started');
//   await expect(page.getByRole('link', { name: 'Get started' })).toHaveAttribute(
//     'href',
//     '/docs/intro',
//   );
//   await page.getByRole('link', { name: 'Get started' }).click();
//   await page.close();
// });
