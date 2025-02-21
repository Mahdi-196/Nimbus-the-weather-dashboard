import { Router, Request, Response } from 'express';
import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

const router = Router();


// POST Request with city name to retrieve weather data
router.post('/', async (req: Request, res: Response) => {
  // try {
    const { cityName } = req.body;
    if (!cityName) {
      return res.status(400).json({ error: 'City name is required' });
    }


    const weatherData = await WeatherService.getWeatherForCity(cityName);

    console.log('route: ',weatherData);
    

    // await HistoryService.saveCity(cityName);
    return res.json(weatherData); 
  // } catch (error) {
  //   return res.status(500).json({ error: 'Failed to fetch weather data' });
  // }
});



// GET search history
router.get('/history', async (_req: Request, res: Response) => {
  // try {
    // const history = await HistoryService.getHistory();
    // return res.json(history); 
  res.json('test'); 
  // } catch (error) {
  //   return res.status(500).json({ error: 'Failed to retrieve search history' });
  // }
});


// BONUS: DELETE city from search history
router.delete('/history/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await HistoryService.deleteCity(id);
    res.json({ message: 'City deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete city' });
  }
});

export default router;