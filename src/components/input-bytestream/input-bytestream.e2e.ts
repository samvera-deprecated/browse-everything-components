
import { newE2EPage } from '@stencil/core/testing';

describe('bytestream', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<input-bytestream></input-bytestream>');
    const element = await page.find('input-bytestream');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the attribute data', async () => {
    const page = await newE2EPage();

    await page.setContent('<input-bytestream></input-bytestream>');
    const component = await page.find('input-bytestream');

    let element = await page.find('input-bytestream >>> .input-bytestream-uuid');
    component.setProperty('uuid', '2fc883e8-2401-4e46-9680-63350b4bd368');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`2fc883e8-2401-4e46-9680-63350b4bd368`);

    element = await page.find('input-bytestream >>> .input-bytestream-location');
    component.setProperty('location', 'http://cloud.org/my/file');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`http://cloud.org/my/file`);

    element = await page.find('input-bytestream >>> .input-bytestream-name');
    component.setProperty('name', 'file.txt');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`file.txt`);
  });
});
