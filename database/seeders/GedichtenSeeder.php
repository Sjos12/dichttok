<?php

namespace Database\Seeders;

use App\Models\Gedicht;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Auth;

class GedichtenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        for ($i = 0; $i < 10; $i++) {
            $validatedData = [
                'titel' => fake()->name(),
                'gedicht' => fake()->text(),
                'auteur' => fake()->name(),
                'context' => fake()->text(),
            ];

            $model = new Gedicht($validatedData);
            $model->user_id = 1;
            $model->save();
        }
    }
}
