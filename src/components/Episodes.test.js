import React from 'react';
import Episodes from './Episodes';
import { render } from "@testing-library/react";



const episode = [
    {
      id: 553946,
      name: "Chapter One: The Vanishing of Will Byers",
      season: 1,
      number: 1,
      runtime: 60,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
      }
    }
  ];



test('Season one displays', async () => {
    const { getAllByTestId, rerender } = render(<Episodes episodes={[]}/>);
    rerender(<Episodes episodes={episode}/>)
    const episodeOne = getAllByTestId(/foo/i)
    expect(episodeOne).toHaveLength(1);
});


