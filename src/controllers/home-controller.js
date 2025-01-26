import {Router} from 'express';
import movieService from '../services/movie-service.js';

const router = Router();

router.get('/', async (req, res) => {

// *use .lean on query to get plain objects
    const movies = await movieService.getAll();
    
// *convert documents to plain objects
    // const plainMovies = movies.map(m => m.toObject());

// *in index.js set runtimeoptions (allowpropertiesbydeffault: true) for handlebars

    res.render('home', {movies});
});

router.get('/about', (req, res) => {
    res.render('about');
});

export default router;