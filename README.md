# pad-array


## Install

```bash
npm install pad-array
```

## Usage

```ts
import { padStart, padEnd } from 'my-package-name';

const originalArray = [
  { id: 1, name: 'Bulbasaur' },
  { id: 2, name: 'Ivysaur' },
  { id: 3, name: 'Venusaur' },
];

const pikachu = {
  id: 25,
  name: 'Pikachu',
};

padStart(originalArray, originalArray.length + 2, pikachu);
//=>
//[
//  { id: 25, name: 'Pikachu' },
//  { id: 25, name: 'Pikachu' },
//  { id: 1, name: 'Bulbasaur' },
//  { id: 2, name: 'Ivysaur' },
//  { id: 3, name: 'Venusaur' },
//]

padEnd(originalArray, originalArray.length + 2, pikachu);
//=>
//[
//  { id: 1, name: 'Bulbasaur' },
//  { id: 2, name: 'Ivysaur' },
//  { id: 3, name: 'Venusaur' },
//  { id: 25, name: 'Pikachu' },
//  { id: 25, name: 'Pikachu' },
//]
```

## API

### padStart(originalArray, length, padValue)

#### originalArray

Type: `array`

#### length

Type: `number`

##### padValue

Type: `any`

### padEnd(originalArray, length, padValue)

#### originalArray

Type: `array`

#### length

Type: `number`

##### padValue

Type: `any`
