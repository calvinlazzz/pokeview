const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');

let driver;

beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000');
});

afterAll(async () => {
    await driver.quit();
});

test('renders the app and performs a search', async () => {
    const searchInput = await driver.findElement(By.css('.form-control'));
    await searchInput.sendKeys('Bulbasaur');
    await driver.wait(until.elementLocated(By.css('.card-title')), 10000);
    const cardTitle = await driver.findElement(By.css('.card-title'));
    const cardTitleText = await cardTitle.getText();
    expect(cardTitleText).toContain('Bulbasaur');
});

test('adds a Pokemon to the squad', async () => {
    const addButton = await driver.findElement(By.css('#squad-button'));
    await addButton.click();
    await driver.wait(until.elementLocated(By.css('.squad-pokemon')), 10000);
    const squadPokemon = await driver.findElement(By.css('.squad-pokemon .pokemon-name'));
    const squadPokemonText = await squadPokemon.getText();
    expect(squadPokemonText).toContain('Bulbasaur');
});