<?php

namespace App\Models;

use Dyrynda\Database\Support\GeneratesUuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Analysis extends Model
{
    use HasFactory, GeneratesUuid;
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function gedicht()
    {
        return $this->belongsTo(Gedicht::class);
    }
    public function highlight_fragments()
    {
        return $this->hasMany(HighlightFragment::class, 'analysis_id');
    }
}
