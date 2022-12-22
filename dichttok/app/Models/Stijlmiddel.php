<?php

namespace App\Models;

use Dyrynda\Database\Support\GeneratesUuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stijlmiddel extends Model
{
    use HasFactory, GeneratesUuid;

    protected $table = 'stijlmiddelen';

    public function highlight_fragments()
    {
        return $this->hasMany(HighlightFragment::class);
    }
}
