<?php

namespace App\Http\Controllers;

use App\Models\Analysis;
use App\Models\Gedicht;
use App\Models\HighlightFragment;
use App\Models\Like;
use App\Models\Stijlmiddel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AnalyseController extends Controller
{
    public function index(Gedicht $gedicht)
    {
        return Inertia::render('CreateGedichtAnalyse', [
            'gedicht' => $gedicht,
            'stijlmiddelen' => Stijlmiddel::all(),
        ]);
    }
    public function create(Request $request, Gedicht $gedicht)
    {

        // dd($request);
        $validatedData = $request->validate([
            'highlightFragments' => 'required|array'
        ]);

        $model = new Analysis();
        $model->user_id = Auth::user()->id;
        $model->gedicht_id = $gedicht->id;
        $model->save();
        foreach ($validatedData['highlightFragments'] as $fragment) {
            $fragment_model = new HighlightFragment();
            $fragment_model->start = $fragment['start'];
            $fragment_model->end = $fragment['end'];
            $fragment_model->analysis_id = $model->id;
            $fragment_model->stijlmiddel_id = $fragment['stijlmiddel']['id'];
            $fragment_model->save();
        }
        return redirect()->route('dashboard');
    }

    public function detail(Request $request, Gedicht $gedicht, Analysis $analysis)
    {
        $analysis->load('highlight_fragments.stijlmiddel', 'user');
        return Inertia::render('ViewGedichtAnalyse', [
            'gedicht' => $gedicht,
            'analysis' => $analysis,
        ]);
    }
    //

    public function like(Analysis $analysis)
    {
        // TODO: Check if gedicht should be available to user...
        $oldLike = $analysis->likes()
            ->where('user_id', Auth::user()->id);

        if ($oldLike->exists()) {
            $oldLike->delete();
        } else {
            $like = new Like();
            $like->user_id = Auth::user()->id;
            $like->likeable_id = $analysis->id;
            $like->likeable_type = Analysis::class;
            $like->save();
        }
        return redirect()->back();
    }
}
