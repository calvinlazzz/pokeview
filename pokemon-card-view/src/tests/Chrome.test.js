const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');
const exp = require('constants');

let driver;

jest.setTimeout(30000); // 30 seconds


beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('http://localhost:3000');
});

afterAll(async () => {
    await driver.quit();
});

test('renders the app and performs a search', async () => {
    await driver.sleep(4000);
    const searchInput = await driver.findElement(By.css('.form-control'));
    await searchInput.sendKeys('Charizard');
    await driver.sleep(2000);
    await driver.wait(until.elementLocated(By.css('.card-title')), 10000);
    const cardTitle = await driver.findElement(By.css('.card-title'));
    const cardTitleText = await cardTitle.getText();
    expect(cardTitleText).toContain('Charizard');

});

test('adds a Pokemon to the squad', async () => {

    const addButton = await driver.findElement(By.css('#squad-button'));
    await addButton.click();
    await driver.sleep(2000);

    await driver.wait(until.elementLocated(By.css('.squad-pokemon')), 10000);
    const squadPokemon = await driver.findElement(By.css('.squad-pokemon .pokemon-name'));
    const squadPokemonText = await squadPokemon.getText();
    expect(squadPokemonText).toContain('Charizard');
    await driver.sleep(2000);
 

});


test('battle button is enabled with 2 Pokemon in the squad', async () => {
    const searchInput = await driver.findElement(By.css('.form-control'));
    await searchInput.clear();
    await driver.sleep(2000);

    await searchInput.sendKeys('149');
    await driver.sleep(2000);

    const addButton = await driver.findElement(By.css('#squad-button'));
    await addButton.click();
    await driver.sleep(2000);
    const battleButton = await driver.findElement(By.css('.btn-primary'));
    await battleButton.click();
    const isDisabled = await battleButton.getAttribute('disabled');
    expect(isDisabled).toBeNull();
    await driver.sleep(2000);

});

test('removes a Pokemon from the squad', async () => {
    const deleteButton = await driver.findElement(By.css('.remove-button'));
    await deleteButton.click();
    await driver.sleep(2000);
    const deleteButton2 = await driver.findElement(By.css('.remove-button'));
    await deleteButton2.click();

    expect(await driver.findElements(By.css('.squad-pokemon'))).toHaveLength(0);
    await driver.sleep(2000);

});