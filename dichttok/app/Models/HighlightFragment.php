<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class  HighlightFragment extends Model
{
    use HasFactory;

    public function analyse()
    {
        return $this->belongsTo(Analysis::class, 'analysis_id');
    }

    public function stijlmiddel()
    {
        return $this->belongsTo(Stijlmiddel::class, 'stijlmiddel_id');
    }
}
