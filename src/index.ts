import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const charactersCollection = new CharactersCollection('EuSouOperdo');
const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(3);
linkedList.add(-5);
linkedList.add(0);

numbersCollection.sort();
console.log(numbersCollection.data);

charactersCollection.sort();
console.log(charactersCollection.data);

linkedList.sort();
linkedList.print();

// const numberSorter = new Sorter(numbersCollection);
// const characterSorter = new Sorter(charactersCollection);
// const linkedListSorter = new Sorter(linkedList);
// numberSorter.sort();
// characterSorter.sort();
// linkedListSorter.sort();
