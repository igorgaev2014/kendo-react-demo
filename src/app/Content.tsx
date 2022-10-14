import * as React from 'react';

import {
    Card, CardImage, CardHeader,
    CardTitle, CardSubtitle,
    CardBody, CardActions
} from '@progress/kendo-react-layout';

export const Monitors = (props: any) => {
    const text = (
      <React.Fragment>
        <IpsMonitors />
        <VaMonitors />
      </React.Fragment>
    );

    return (
      <div>
        {props.children ? props.children : text}
      </div>
    );
}

export const IpsMonitors = (props: any) => {
    const text = (
      <div id="IpsMonitors" style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: 10 }}>
        <div style={{ width: '47%' }}>
          <Card>
            <CardImage src="https://img.mvideo.ru/Big/30063630bb.jpg" />
            <div>
              <CardHeader>
                <CardTitle>Монитор HUAWEI MateView SE SSN-24 (53060683)</CardTitle>
                <CardSubtitle>
                  <span className="reviews">
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <div>5/5 (203)</div>
                  </span>
                </CardSubtitle>
              </CardHeader>
              <CardBody>
                <p>Экран монитора Huawei MateView SE SSN-24 создан по технологии IPS. Его диагональ — 23,8 дюйма, разрешение — 1920 х 1080 пикселей, частота обновления — 75 Гц. Максимальные углы обзора по вертикали и горизонтали — 178°.</p>
              </CardBody>
              <CardActions>
                <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-primary"></button>
              </CardActions>
            </div>
          </Card>
        </div>
        <div style={{ width: '47%' }}>
          <Card>
            <CardImage src="https://img.mvideo.ru/Pdb/30064610b.jpg" />
            <div>
              <CardHeader>
                <CardTitle>Монитор Samsung S24R350FZI</CardTitle>
                <CardSubtitle>
                  <span className="reviews">
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <div>5/5 (653)</div>
                  </span>
                </CardSubtitle>
              </CardHeader>
              <CardBody>
                <p>Экран монитора Samsung S24R350FZI создан по технологии IPS. Его диагональ — 23,8 дюйма, разрешение — 1920 х 1080 пикселей, частота обновления — 75 Гц. Максимальные углы обзора по вертикали и горизонтали — 178°..</p>
              </CardBody>
              <CardActions>
                <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-primary"></button>
              </CardActions>
            </div>
          </Card>
        </div>
      </div>
    );

    return (
      <div>
        {props.children ? props.children : text}
      </div>
    );
}

export const VaMonitors = (props: any) => {
    const text = (
      <div id="VaMonitors" style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: 10 }}>
        <div style={{ width: '47%' }}>
          <Card>
            <CardImage src="https://img.mvideo.ru/Big/30043369bb.jpg" />
            <div>
              <CardHeader>
                <CardTitle>Монитор игровой HP OMEN X Emperium 65</CardTitle>
                <CardSubtitle>
                  <span className="reviews">
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star-outline" />
                    <div>4/5 (681)</div>
                  </span>
                </CardSubtitle>
              </CardHeader>
              <CardBody>
                <p>По сравнению с монитором HP Omen X Emperium 65 его собратья смотрятся крошечными. Гигантский девайс позволит тебе в полной мере оценить виртуальные красоты и сможет заменить телевизор в комнате. Чтобы добиться максимального качества картинки, игровому компьютеру придётся изрядно напрячь начинку.
                </p>
              </CardBody>
              <CardActions>
                <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-primary"></button>
              </CardActions>
            </div>
          </Card>
        </div>
        <div style={{ width: '47%' }}>
          <Card>
            <CardImage src="https://img.mvideo.ru/Big/30042271bb.jpg" />
            <div>
              <CardHeader>
                <CardTitle>Монитор AOC 22E1Q</CardTitle>
                <CardSubtitle>
                  <span className="reviews">
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star-outline" />
                    <div>4/5 (681)</div>
                  </span>
                </CardSubtitle>
              </CardHeader>
              <CardBody>
                <p>По сравнению с монитором AOC 22E1Q его собратья смотрятся крошечными. Гигантский девайс позволит тебе в полной мере оценить виртуальные красоты и сможет заменить телевизор в комнате. Чтобы добиться максимального качества картинки, игровому компьютеру придётся изрядно напрячь начинку.
                </p>
              </CardBody>
              <CardActions>
                <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-primary"></button>
              </CardActions>
            </div>
          </Card>
        </div>
      </div>
    );

    return (
      <div>
        {props.children ? props.children : text}
      </div>
    );
}

export const Television = (props: any) => {
    const text = (
      <React.Fragment>
        <UhdTelevision />
        <HdTelevision />
      </React.Fragment>
    );

    return (
      <div>
        {props.children ? props.children : text}
      </div>
    );
}

export const HdTelevision = (props: any) => {
    const text = (
      <div id="HdTelevision" style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: 10 }}>
        <div style={{ width: '47%' }}>
          <Card>
            <CardImage src="https://img.mvideo.ru/Big/10024676bb.jpg" />
            <div>
              <CardHeader>
                <CardTitle>Телевизор Novex NWT-43F171MS</CardTitle>
                <CardSubtitle>
                  <span className="reviews">
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star-outline" />
                    <div>4/5 (391)</div>
                  </span>
                </CardSubtitle>
              </CardHeader>
              <CardBody>
                <p>Телевизор Novex NWT-43F171MS рассчитан на тех, кто предпочитает искать интересные фильмы и передачи традиционным способом – в программе эфирного ТВ.
                </p>
              </CardBody>
              <CardActions>
                <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-primary"></button>
              </CardActions>
            </div>
          </Card>
        </div>
        <div style={{ width: '47%' }}>
          <Card>
            <CardImage src="https://img.mvideo.ru/Big/10029724bb.jpg" />
            <div>
              <CardHeader>
                <CardTitle>Телевизор Toshiba 32V35KE</CardTitle>
                <CardSubtitle>
                  <span className="reviews">
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <div>5/5 (1023)</div>
                  </span>
                </CardSubtitle>
              </CardHeader>
              <CardBody>
                <p>Toshiba 32V35KE — телевизор с операционной системой Vidaa. Диагональ экрана с 8-битной матрицей — 32 дюйма, разрешение — 1366 х 768 пикселей. Аналоговый тюнер поддерживает стандарт PAL/SECAM, цифровой — DVB-T/T2/C/S/S2.
                </p>
              </CardBody>
              <CardActions>
                <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-primary"></button>
              </CardActions>
            </div>
          </Card>
        </div>
      </div>
    );

    return (
      <div>
        {props.children ? props.children : text}
      </div>
    );
}

export const UhdTelevision = (props: any) => {
    const text = (
      <div id="UhdTelevision" style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: 10 }}>
        <div style={{ width: '47%' }}>
          <Card>
            <CardImage src="https://img.mvideo.ru/Big/10030234bb.jpg" />
            <div>
              <CardHeader>
                <CardTitle>Телевизор Haier 55 Smart TV MX</CardTitle>
                <CardSubtitle>
                  <span className="reviews">
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star-outline" />
                    <div>4/5 (2523)</div>
                  </span>
                </CardSubtitle>
              </CardHeader>
              <CardBody>
                <p>Диагональ экрана телевизора Haier 55 Smart TV MX — 55 дюймов, разрешение — 3840 х 2160 пикселей. Предусмотрены цифровое шумоподавление и масштабирование изображения до формата 4K. 
                </p>
              </CardBody>
              <CardActions>
                <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-primary"></button>
              </CardActions>
            </div>
          </Card>
        </div>
        <div style={{ width: '47%' }}>
          <Card>
            <CardImage src="https://img.mvideo.ru/Big/10031349bb.jpg" />
            <div>
              <CardHeader>
                <CardTitle>Телевизор Artel UA43H3502</CardTitle>
                <CardSubtitle>
                  <span className="reviews">
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <span className="k-icon k-i-star" style={{ color: '#ffce2a' }} />
                    <div>5/5 (357)</div>
                  </span>
                </CardSubtitle>
              </CardHeader>
              <CardBody>
                <p>Телевизор Artel UA43H3502 с корпусом черного цвета оснащен 43-дюймовым экраном, соответствующим формату 16:9. Его диагональ — 43 дюйма, разрешение — 3840х2160 пикселей. Технология цифрового шумоподавления отсеивает помехи и повышает качество картинки. Аудиосистема представлена двумя фронтальными динамиками мощностью 10 Вт.
                </p>
              </CardBody>
              <CardActions>
                <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-primary"></button>
              </CardActions>
            </div>
          </Card>
        </div>
      </div>
    );

    return (
      <div>
        {props.children ? props.children : text}
      </div>
    );
}

const App = () => {
    return (
      <p>Hierarchical drawer demo</p>
    );
}

export default App;
