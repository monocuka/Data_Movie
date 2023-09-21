import {filterData, sortData, computeState } from '../src/data.js';
import data from '../src/data/rickandmorty/rickandmorty.js';

describe('data.filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('returns 3 vampires `filterData`', () => {
    const totalVampires = 3;
    const callFilterData = filterData("Vampire", data.results);
    expect(callFilterData.length).toBe(totalVampires);
  });
  it('first element id is 66', () => {
    const expectedId = 66;
    const callFilterData = filterData("Vampire", data.results);
    expect(callFilterData[0].id).toBe(expectedId);
  });
});

describe('data.sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });
  it('check first element sorted from A to z `sortData`', () =>{
    const firstElement = "Abadango Cluster Princess";
    const callSortData = sortData(data);
    expect(callSortData[0].name).toBe(firstElement);
  });

});

describe('data.computeState', () => {
  it('is a function', () => {
    expect(typeof computeState).toBe('function');
  });
  it('number of species `computeState`', () => {
    const numberofspeciesAlien = 132;
    const callComputeData = computeState(data);
    expect(callComputeData[1].count).toBe(numberofspeciesAlien);
  })
});