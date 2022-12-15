<?php

namespace Database\Seeders;

use App\Models\Stijlmiddel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Stijlmiddelseeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $stijlmiddelen = [
            [
                'name' => 'Enjambement',
                'color' => 'bg-indigo-300'
            ],
            [
                'name' => 'Personificatie',
                'color' => 'bg-blue-300',
            ]
        ];

        Stijlmiddel::insert($stijlmiddelen);
    }
}
