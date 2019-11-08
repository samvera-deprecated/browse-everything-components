import { newSpecPage } from '@stencil/core/testing';
import { InputBytestream } from './input-bytestream.tsx';

it('should render my component', async () => {
  const page = await newSpecPage({
    components: [InputBytestream],
    html: `<input-bytestream uuid="2fc883e8-2401-4e46-9680-63350b4bd368"
                    location="http://cloud.org/file.txt"
                    name="file.txt"
                    size="12345"
                    mtime="1568398946"
                    media-type="application/octet-stream" />`,
  });

  expect(page.root).toEqualHtml(`
    <input-bytestream location="http://cloud.org/file.txt" media-type="application/octet-stream" mtime="1568398946" name="file.txt" size="12345" uuid="2fc883e8-2401-4e46-9680-63350b4bd368">
      <mock:shadow-root>
        <div class="input-bytestream">
          <div>
            <input class="input-bytestream-checkbox" type="checkbox" id="2fc883e8-2401-4e46-9680-63350b4bd368" name="2fc883e8-2401-4e46-9680-63350b4bd368">
          </div>
          <div class="input-bytestream-uuid">2fc883e8-2401-4e46-9680-63350b4bd368</div>
          <div class="input-bytestream-location">http://cloud.org/file.txt</div>
          <div class="input-bytestream-name">file.txt</div>
          <div class="input-bytestream-size">12345</div>
          <div class="input-bytestream-mtime">1568398946</div>
          <div class="input-bytestream-media-type">application/octet-stream</div>
        </div>
      </mock:shadow-root>
    </input-bytestream>
      `);

});
