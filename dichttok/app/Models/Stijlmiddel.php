<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stijlmiddel extends Model
{
    use HasFactory;

    protected $table = 'stijlmiddelen';

    public function highlight_fragments()
    {
        return $this->hasManyThrough(HighlightFragment::class, Analysis::class);
    }
}
