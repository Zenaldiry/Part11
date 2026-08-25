import { test, describe, expect } from '@playwright/test'

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(
      page.getByText(
        'Pokémon and Pokémon character names are trademarks of Nintendo.',
      ),
    ).toBeVisible()
  })
  test('one can navigate from the main page to the page of a particular Pokemon', async ({
    page,
  }) => {
    await page.goto('')
    const pokemon = await page.getByText('ivysaur')
    await pokemon.click()
    await expect(page.getByText('Ivysaur')).toBeVisible()
    await expect(page.getByText('speed')).toBeVisible()
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})
