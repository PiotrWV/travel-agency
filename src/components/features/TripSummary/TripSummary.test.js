import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<TripSummary id='abc' image='myImage' name='myName' cost='123' days={123} tags={[]}/>);
    expect(component).toBeTruthy();
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('Link should receive correct id', () => {
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId} tags={[]} />);
    expect(component.find('.link').prop('to')).toEqual(`/trip/${expectedId}`);
  });

  it('img should receive correct src, alt', () => {
    const expectedImage = 'img.jpg';
    const expectedAlt = 'imgName';
    const component = shallow(<TripSummary image={expectedImage} name={expectedAlt} tags={[]} />);
    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct name, cost, days', () => {
    const expectedName = 'exampleName';
    const expectedCost = '32,258';
    const expectedDays = 12;

    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} tags={[]} />);

    const renderedTitle = component.find('.title').text();
    const renderDays = component.find('span').first().text();
    const renderCost = component.find('span').at(1).text();

    expect(renderedTitle).toEqual(expectedName);
    expect(renderDays).toEqual(`${expectedDays} days`);
    expect(renderCost).toEqual(`from ${expectedCost}`);
  });

  it('should render span in correct order', () => {
    const tags = ['cat', 'dog', 'mouse'];
    const component = shallow(<TripSummary tags={[...tags]} />);
    expect(component.find('.tags span').at(0).text()).toEqual(tags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(tags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(tags[2]);
  });

  it('should crash if tags is false', () => {
    const component = shallow(<TripSummary tags={[]} />);
    expect(component.find('.tags')).toBeTruthy();
  });
});