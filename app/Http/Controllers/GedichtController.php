<?php

namespace App\Http\Controllers;

use App\Models\Gedicht;
use App\Models\Like;
use App\Models\Stijlmiddel;
use App\Models\Tag;
use Illuminate\Validation\Rules\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redis;
use Inertia\Inertia;

class GedichtController extends Controller
{

    public function create_index()
    {
        return Inertia::render('CreateGedicht/CreateGedicht', [
            'genres' => Tag::all(),
        ]);
    }
    //

    public function create(Request $request)
    {


        $validatedData = $request->validate([
            'titel' => 'required',
            'gedicht' => 'required',
            'auteur' => 'required',
            'context' => 'nullable',
            'voiceover' => 'nullable',
            'genre' => 'integer|nullable'
        ]);

        $model = new Gedicht($validatedData);
        $model->user_id = Auth::user()->id;
        $model->save();
        if (array_key_exists('voiceover', $validatedData)) {
            $model->addMedia($validatedData['voiceover'])->toMediaCollection(('audio'));
        }

        if (array_key_exists('genre', $validatedData)) {
            $model->tags()->attach(Tag::find($validatedData['genre']));
        }
        return redirect()->route('dashboard');
    }

    public function like(Gedicht $gedicht)
    {
        // TODO: Check if gedicht should be available to user...
        $oldLike = $gedicht->likes()
            ->where('user_id', Auth::user()->id);

        if ($oldLike->exists()) {
            $oldLike->delete();
        } else {
            $like = new Like();
            $like->user_id = Auth::user()->id;
            $like->likeable_id = $gedicht->id;
            $like->likeable_type = Gedicht::class;
            $like->save();
        }
        return redirect()->back();
    }
}
